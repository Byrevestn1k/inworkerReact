import { func } from 'prop-types'
import {ALERT_END,ALERT_START} from '../constant/alert.constant'

export function showAlert({type,msg}, dispatch)  {
    dispatch({
        type: ALERT_START,
        payload: {
            type: type,
            msg: msg
        }
    })
}
export function closeAlert ( dispatch ){
    dispatch({
        type: ALERT_END,
        payload: null
    })
}