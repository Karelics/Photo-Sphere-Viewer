const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';

const viewer = new Viewer({
    container: 'viewer',
    adapter: [EquirectangularVideoAdapter, {
        muted: true,
    }],
    caption: 'Ayutthaya <b>&copy; meetle</b>',
    loadingImg: baseUrl + 'loader.gif',
    touchmoveTwoFingers: true,
    mousewheelCtrlKey: true,
    navbar: 'video caption settings fullscreen',

    plugins: [
        VideoPlugin,
        SettingsPlugin,
        [ResolutionPlugin, {
            defaultResolution: 'HD',
            resolutions: [
                {
                    id: 'UHD',
                    label: 'Ultra high',
                    panorama: { source: baseUrl + 'equirectangular-video/Ayutthaya_UHD.mp4' },
                },
                {
                    id: 'FHD',
                    label: 'High',
                    panorama: { source: baseUrl + 'equirectangular-video/Ayutthaya_FHD.mp4' },
                },
                {
                    id: 'HD',
                    label: 'Standard',
                    panorama: { source: baseUrl + 'equirectangular-video/Ayutthaya_HD.mp4' },
                },
                {
                    id: 'SD',
                    label: 'Low',
                    panorama: { source: baseUrl + 'equirectangular-video/Ayutthaya_SD.mp4' },
                },
            ],
        }],
    ],
});
