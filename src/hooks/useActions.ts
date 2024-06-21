import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import {watchlistActions} from '../store/watchlist/watchlist.slice'

const allActions = {
    ...watchlistActions
}

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(allActions, dispatch)
}