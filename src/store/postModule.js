import axios from 'axios';
export const postModule =  {
    state: () => ({
        posts: [],
        isPostLoading: true, 
        selectedSort: '',
        limit: 10,
        pageNumber: 1,
        totalPages: 0,
        searchQuery: '',
        sordOptions: [
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По содержимому'}
        ]  
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.includes(state.searchQuery))
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        },
        setIsPostLoading(state, isPostLoading) {
            state.isPostLoading = isPostLoading
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        setLimit(state, limit) {
            state.limit = limit
        },
        setPageNumber(state, pageNumber) {
            state.pageNumber = pageNumber
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
        setSordOptions(state, sordOptions) {
            state.sordOptions = sordOptions
        },
        

    },
    actions: {
        async fetchPosts({state, commit}) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _limit: state.limit,
                        _page: state.pageNumber 
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / this.limit))
                commit('setPosts', response.data)
                commit('setIsPostLoading', false)
            } catch(e) {
                console.log('Ошибка')
            } finally {
                commit('setPost', false)
            }
        },
        async loadingPosts({state, commit}) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _limit: state.limit,
                        _page: state.pageNumber 
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / this.limit))
                commit('setPosts', [...state.posts, ...response.data])
                commit('setPageNumber', state.pageNumber + 1)
            } catch(e) {
                console.log(e)
            } finally {
                
            }
        },
    },
    namespaced: true
}