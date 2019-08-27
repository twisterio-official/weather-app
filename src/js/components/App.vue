<template>
    <div>
        {{ message }}

        <pre>
            {{ info }}
        </pre>
    </div>
</template>

<script>
    export default {
        created() {
            this.fetchWeaterInfo();
        },

        data() {
            return {
                message: 'Kyiv Weather',
                info: ''
            }
        },

        methods: {
            fetchWeaterInfo() {
                const myKey = '0e20dd02954ed150f002b7c29d0a5387';
                // let url = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=bd5e378503939ddaee76f12ad7a97608"
                axios.get(url)
                    .then(response => {
                        this.info = response.data;
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }
</script>