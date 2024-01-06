# Request Header Parser Microservice

The solution link is [https://mks-fcc-headerparser-microservice.glitch.me](https://mks-fcc-headerparser-microservice.glitch.me).

## Example Usage

[https://mks-fcc-headerparser-microservice.glitch.me/api/whoami](https://mks-fcc-headerparser-microservice.glitch.me/api/whoami)

## Example Output

```
{
    "ipaddress":"::ffff:159.20.14.100",
    "language":"en-US,en;q=0.5",
    "software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"
}
```

## Test Cases

*   You should provide your own project, not the example URL.

*   A request to `/api/whoami` should return a JSON object with your IP address in the `ipaddress` key.

*   A request to `/api/whoami` should return a JSON object with your preferred language in the `language` key.

*   A request to `/api/whoami` should return a JSON object with your software in the `software` key.