#!/bin/sh

apt-get -y install rsync
make
make deploy

