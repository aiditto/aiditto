
default: build

############################################
# BUILDING
.PHONY: build
build:
	npm install
	rm -rf build || true
	npm run build
	# rsync -a --delete build/ /mnt/dev.aiditto.se/frontend
	echo "$(date)" >> /tmp/devbuild.log

############################################
# DEPLOYMENT
deploy: deploy-dev-aiditto

.PHONY: deploy-dev-aiditto
deploy-dev-aiditto:
	rsync -a build/ /mnt/dev.aiditto.se/frontend
