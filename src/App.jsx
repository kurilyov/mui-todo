import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AddTask from './pages/AddTask'
import { getTasks } from './store/tasksSlice'

import tasks from './tasks'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTasks({ tasks }))
    }, [dispatch])

    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='add-task' element={<AddTask />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
