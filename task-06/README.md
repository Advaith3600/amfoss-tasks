# Geddit

## How to run the script?

Make sure you have the latest version of go lang installed in your system. Once confirmed, open the folder task-06 in your terminal and type the following command.

    cp .env.example .env
    
This command copies `.env.example` file to `.env`. If the command didn't work, try `copy` instead of `cp`. Now, read [this](https://github.com/reddit-archive/reddit/wiki/OAuth2-Quick-Start-Example#first-steps) gist to know how to get `client_id` and `client_secret`. Once you get the values, enter it in the `.env` file to their respective fields along with your Reddit username and password.

Now, you are ready to run the script. 

    go run script.go
    
Enjoy!
