import { createApp } from 'vue'

import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/Fooditem2.vue'
import PersonalProfile from './components/Personalprofile.vue'
import './components/css/personalprofile.css'

const app = createApp(App)

app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.component('personal-profile', PersonalProfile)

app.mount('#app')