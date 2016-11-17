# Avatar Downloader Program

This is a very simple program that accesses GitHub API and downloads all users' avatars.

## Motivation

This was the first project designed by Lighthouse Labs for the September 2016 cohort. The motivation was to practice API access.

## Setup

1. Fork & clone
2. Run `npm install` to install dependencies
3. Create a .env file based on the .env.example file
4. Run the program with `node download_avatars.js <repo_owner_here> <repo_name_here>`. Example: `node download_avatars.js lighthouse-labs laser_shark`

There is no need to create a folder to hold the avatars as one will be created for you :)

## Dependencies

- dotenv
- request