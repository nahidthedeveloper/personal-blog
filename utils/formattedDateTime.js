import moment from 'moment'

export const formattedDateTime = (props) => {
    let dateTime = moment(props)
    return dateTime.format('LLLL')
}