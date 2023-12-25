import { api } from "~/utils/api";
import { InfiniteTweetList } from "./InfiniteTweetList";

export function FollowingTweets() {
  const tweets = api.tweet.infiniteFeed.useInfiniteQuery(
    {onlyFollowing: true},
    { getNextPageParam: (lastpage) => lastpage.nextCursor },
  );
  return (
    <InfiniteTweetList
      tweets={tweets.data?.pages.flatMap((page) => page.tweets)}
      isError={tweets.isError}
      isLoading={tweets.isLoading}
      hasMore={tweets.hasNextPage ?? false}
      fetchNewTweets={tweets.fetchNextPage}
    />
  );
}
