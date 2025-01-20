<template>
    <nav 
        :class="[`navbar-${theme}` , `bg-${theme}`, 'navbar', 'navbar-expand-lg']"
    >   
        <div class="container-fluid header-style"> 
            <a class="navbar-brand d-flex align-items-center" href="#">
                <img
                    src="../assets/professional-cropped.jpeg"
                    class="img-fluid"
                    style="max-width: 100%"
                />
            </a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <RouterLink
                v-for="(page, index) in pages" class="nav-item" :key="index"
                >
                    <a
                        class="nav-link"
                        :class="activeClasses"
                        aria-current="page"
                        :href="page.link.url"
                        :title="`This link goes to the ${page.link.text} page`"
                        @click.prevent="$bus.$emit('navbarLinkActived', index)"
                    >{{ page.link.text }}</a>
                </RouterLink>
                
            </ul>

            <form class="d-flex">
                <button 
                    class="btn btn-primary "
                    @click.prevent="changeTheme()"
                > Toggle </button>

            </form>
        </div>
    </nav>
    

</template>

<script>

export default{
    props: ['pages'],

}


</script>

<style scoped>



</style>