const microApps = [
    {
        name: 'demo-vue3',
        entry: '//localhost:5173',
        activeRule: '#/demo-vue3'
    }
]

const app = microApps.map(item => { return { ...item, container: '#app-container' } })

export default app