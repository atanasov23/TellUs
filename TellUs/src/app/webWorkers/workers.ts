export const workers = {
    notificationWorker: new Worker(new URL('../webWorkers/notification.worker', import.meta.url))
}

