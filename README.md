## Assuming that the docker is pre-installed on your device and you are logged-in.

# ConFusion

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/confusion` directory.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Docker build

Run `docker build . -t image_name` to build the project using docker file. The build image will be stored locally on the docker directory. To view the image created after build write `docker images` command.

here change 'image_name' to the name you want for the image.

## Docker run

The container after run will be exposed on port 80 on the docker container. Run `docker run -p 4200:80 --name docker_container_name image_name`. This will run docker container and will be open to port 4200 on host. Open local host with port 4200 on the device to view. 
