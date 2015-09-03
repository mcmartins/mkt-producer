# MKT Producer

## Intro

Produces Messages for testing all infrastructure. It uses a list containing some countries and corresponding currencies. The tool generates messages by getting randomly two of these countries and setting random values with random rates.

## Run

```bash
node MKT_CONFIG_FILE="/path/to/config.json" mkt-producer/index.js
```

## Configurations

The configurations file is shared among all the projects and is located in the [mkt-portal](https://github.com/mcmartins/mkt-portal) | [config.json](https://github.com/mcmartins/mkt-portal/blob/master/config.json)
