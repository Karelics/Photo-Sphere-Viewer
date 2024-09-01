const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';

const viewer = new Viewer({
    container: 'viewer',
    adapter: [CubemapVideoAdapter, {
        muted: true,
    }],
    caption: 'Dreams of Dalí <b>&copy; The Dalí Museum</b>',
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
                    panorama: { source: baseUrl + 'cubemap-video/DreamOfDali_UHD.webm' },
                },
                {
                    id: 'FHD',
                    label: 'High',
                    panorama: { source: baseUrl + 'cubemap-video/DreamOfDali_FHD.webm' },
                },
                {
                    id: 'HD',
                    label: 'Standard',
                    panorama: { source: baseUrl + 'cubemap-video/DreamOfDali_HD.webm' },
                },
            ],
        }],
    ],
});
