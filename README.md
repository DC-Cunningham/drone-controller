# Drone Controller

## Description

A React-based application deployed using a Mongo, Express, Node and styled components.
This application displays a flight map for an aerial drone that takes photographs of targets.

The premise:
Blue Flag has an aerial drone which it uses to take photographs of billboards. Instructions are sent to the drone in a simple language that tells the drone which direction to move and when to take a photo. Moves are always exactly 1 km to the north (^), south (v), east (>) or west (<) or take a photograph (x).
Unfortunately, the instruction processor is not perfect yet so the drone may photograph the same billboard multiple times.
How many billboards are photographed at least once?
For example:

- x^xv takes photos of 2 billboards and ends up back at the starting location
- x^^x>>xvvx<<x takes photos of 4 billboards, including 2 photos of the same billboard at the starting location

## Table of Contents

- [Description](#description)
- [Screenshot](#screenshot)
- [Installation](#installation)
- [Usage](#usage)
- [Authors and Acknowledgment](#authors-and-acknowledgment)
- [License](#license)

## Screenshot

## Installation

The application has been deployed here

## Usage

Saved flight paths can be chosen and their flight maps viewed. Eack coordinate square has a tooltip that gives further information about the status of the airspace (flown, unflown or photo location) and at which step in the command sequence that photos where taken.

New commands strings can be named added into the database where a corresponding flight path will be created for it.

## Future Plans and Known Bugs

If a flightpath is too large the display is not easy to read and overflows of the screen. Integration of a container and zoom feature would help.

Currently there is no error checking of the command string contents when sent to the database.

The ability to edit the name and contents of the command sequence.

## Authors and Acknowledgment

### Main Author

[DC-Cunningham](https://github.com/DC-Cunningham)

![Author Avatar](https://avatars0.githubusercontent.com/u/47209814?v=4&s=100)

## License

© 2020 The Beautiful Revolution. All Rights Reserved.
