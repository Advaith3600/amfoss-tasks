# importing necessary packages
import requests
import subprocess

# color scheme for output
class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

# fetching list of repositories owned/created by amFOSS
res = requests.get('https://api.github.com/orgs/amfoss/repos')
js = res.json()

# printing the total number of repositories
print(f"{bcolors.OKGREEN}amFOSS organization has {len(js)} repositories{bcolors.ENDC}\n")

# looping through each repository
for item in js:
    url = item['html_url']

    # displaying the current repository being fetched
    print(f"{bcolors.OKGREEN}Fetching commits from the repo {url}{bcolors.ENDC}")
    subprocess.run(f"perceval git --json-line {url} >> commits.json", shell = True)