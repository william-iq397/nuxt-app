import PocketBase from 'pocketbase'

const appConfig = useAppConfig()
const pb = new PocketBase(appConfig.pocketbase.url)
pb.autoCancellation(false);

export const usePocketbase = () => {
    return pb
}