package main

import (
    "fmt"
    "context"
    "log"

    "github.com/vartanbeno/go-reddit/reddit"
    "github.com/joho/godotenv"
)

var ctx = context.Background()

func main() {
    // loading .env variables
    err := godotenv.Load(".env")

    if err != nil {
        log.Fatalf("Error loading .env file")
    }

    // initializing reddit client
    client, _ := reddit.NewClient(reddit.FromEnv)

    // getting top posts from the subreddit r/memes
    // with max limit of 100 and time period of current week
    posts, _, err := client.Subreddit.TopPosts(ctx, "memes", &reddit.ListPostOptions{
        ListOptions: reddit.ListOptions{
            Limit: 100,
        },
        Time: "week",
    })

    if err != nil {
        return
    }

    fmt.Printf("Upvoting %d posts from r/memes \n", len(posts))

    // up voting every posts fetched
    for i := 0; i < len(posts); i++ {
        fmt.Printf("%d/%d, voting post t3_%s\n", i + 1, len(posts), posts[i].ID)

    	_, err := client.Post.Upvote(context.Background(), "t3_" + posts[i].ID)

        if err != nil {
            return
        }
    }
}