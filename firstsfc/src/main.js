import { createApp } from 'vue'

import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/Fooditem2.vue'
import PersonalProfile from './components/Personalprofile.vue'
import './components/css/personalprofile.css'
import CommentForm from './components/CommentForm.vue'
import Comment from './components/Comment.vue'


const app = createApp(App)

app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.component('personal-profile', PersonalProfile)
app.component('comment-form', CommentForm)
app.component('comment', Comment)

app.mount('#app')