build-docker:
	docker build -t portafolio .
run-docker:
	docker run -d -p 3000:3000 portafolio
