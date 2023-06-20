# Adrián Bazaga Personal Website 
### <a href="https://bazaga.ai/">Link Here</a> 

## Description
This my personal website, built based on the template by Tim Baker (<a href="https://github.com/tbakerx/react-resume-template">here</a>) but adapted to my own needs. It uses ReactJS so it is fully adapted for any device.

In addition to the visual adaptations, I'm including a Docker setup so that you can run your own website based on this one however you please.

## Running the website
Simply run the script `run_website_container.sh`, which will

1. Build the Docker image including node and yarn
2. Run the entrypoint for running the website
3. Deploy it on port `EXPOSE_PORT` (3100 by default)
