## Запуск
### Запуск контейнера из registry
docker run -e TELEGRAM_BOT_TOKEN=your_token -e API_URL=your_url your-image-name
или
docker run --env-file /path/to/.env.prod your-image-name