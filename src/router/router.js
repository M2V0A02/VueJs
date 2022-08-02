import {createRouter} from "vue-router";
import {createWebHistory} from "vue-router";
import Main from "@/pages/Main";
import UserPage from "@/pages/PostPages";
import About from "@/pages/About";
import PostPage from "@/pages/PostIdPage";
import PostPageWithStore from "@/pages/PostPageWithStore";
import PostPageWithApi from "@/pages/PostPageWithApi";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: UserPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/post/:id',
        component: PostPage
    },
    {
        path: '/postsWithStore',
        component: PostPageWithStore
    },
    {
        path: '/postsWithApi',
        component: PostPageWithApi
    }
]

const router = createRouter( {
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router