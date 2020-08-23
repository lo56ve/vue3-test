<script>
    export default {
        setup() {
            // 网络状态
            const { networkState } = useNetworkState()

            // 文件夹状态
            const { folders, currentFolderData } = useCurrentFolderData(networkState)
            const folderNavigation = useFolderNavigation({
                networkState,
                currentFolderData,
            })
            const { favoriteFolders, toggleFavorite } = useFavoriteFolders(
                currentFolderData
            )
            const { showHiddenFolders } = useHiddenFolders()
            const createFolder = useCreateFolder(folderNavigation.openFolder)

            // 当前工作目录
            resetCwdOnLeave()
            const { updateOnCwdChanged } = useCwdUtils()

            // 实用工具
            const { slicePath } = usePathUtils()

            return {
                networkState,
                folders,
                currentFolderData,
                folderNavigation,
                favoriteFolders,
                toggleFavorite,
                showHiddenFolders,
                createFolder,
                updateOnCwdChanged,
                slicePath,
            }
        },
    }
</script>
