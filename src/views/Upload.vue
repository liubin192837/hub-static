<template>
<Upload :headers="{'Content-Type':'multipart/form-data'}" :on-success="handleSuccess" :on-error="handleError" multiple type="drag" action="/upload">

    <div style="padding: 20px 0">
        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
        <p>Click or drag files here to upload</p>
    </div>
</Upload>
</template>

<script>
export default {
    methods: {
        handleSuccess(res, file) {
            console.log('upload handleSuccess',file)
            /*  file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
             file.name = '7eb99afb9d5f317c912f08b5212fd69a'; */
        },

    }
}
</script>
