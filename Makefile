.PHONY: up down ps logs yarn yi yidev editorconfig

MAKEPATH := $(abspath $(lastword $(MAKEFILE_LIST)))
PWD := $(dir $(MAKEPATH))

up:
		docker-compose up -d

down:
		docker-compose down

ps:
		docker-compose ps

ARG=""
logs:
		docker-compose logs $(ARG)

ARG=""
yarn:
	docker run --rm -it \
	-v $(PWD):/usr/src/apps \
	-w /usr/src/apps \
	jav13r/nodejs:6.14.2 \
	yarn $(ARG)

ARG=""
yi:
	docker run --rm -it \
	-v $(PWD):/usr/src/apps \
	-w /usr/src/apps \
	jav13r/nodejs:6.14.2 \
	yarn init $(ARG)

ARG=""
yidev:
	docker run --rm -it \
	-v $(PWD):/usr/src/apps \
	-w /usr/src/apps \
	jav13r/nodejs:6.14.2 \
	yarn add $(ARG) -D

ARG=""
editorconfig:
	docker run --rm -it \
	-v $(PWD):/usr/src/apps \
	-w /usr/src/apps \
	jav13r/nodejs:6.14.2 \
	yarn editorconfig-tools $(ARG)
