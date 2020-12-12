up:
	docker-compose --env-file .env.local up -d

down:
	docker-compose --env-file .env.local down

reload:
	docker-compose exec webserver nginx -s reload

migrate:
	docker-compose exec api php artisan migrate

seed:
	docker-compose exec api php artisan db:seed

tinker:
	docker-compose exec api php artisan tinker