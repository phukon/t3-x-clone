import { api } from "~/utils/api";
import { InfiniteTweetList } from "./InfiniteTweetList";

export function RecentTweets() {
  const tweets = api.tweet.infiniteFeed.useInfiniteQuery(
    {},
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
