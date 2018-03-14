import React from 'react';

import './Calendar.css';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';

import BigCalendar from 'react-big-calendar';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';


const DragAndDropCalendar = withDragAndDrop(BigCalendar);

const events = [
    {
        id: 0,
        title: 'Coding',
        allDay: true,
        start: new Date(2018, 2, 14),
        end: new Date(2018, 3, 18),
    },
    {
        id: 1,
        title: 'Long Event',
        start: new Date(2017, 3, 7),
        end: new Date(2017, 3, 10),
    },

    {
        id: 2,
        title: 'Coding',
        start: new Date(2018, 2, 13, 12, 30, 0),
        end: new Date(2018, 2, 14, 4, 0, 0),
    },

    {
        id: 33,
        title: 'Study in University',
        start: new Date(2018, 2, 12, 11, 30, 0),
        end: new Date(2018, 2, 12, 14, 25, 0),
    },

    {
        id: 34,
        title: 'Study in University',
        start: new Date(2018, 2, 13, 8, 30, 0),
        end: new Date(2018, 2, 13, 13, 10, 0),
    },

    {
        id: 35,
        title: 'Study in University',
        start: new Date(2018, 2, 14, 10, 20, 0),
        end: new Date(2018, 2, 14, 12, 45, 0),
    },

    {
        id: 36,
        title: 'Study in University',
        start: new Date(2018, 2, 15, 13, 30, 0),
        end: new Date(2018, 2, 15, 16, 40, 0),
    },

    {
        id: 38,
        title: 'Deadline of Hometask',
        start: new Date(2018, 2, 16, 8, 0, 0),
        end: new Date(2018, 2, 16, 24, 0, 0),
    },

    {
        id: 37,
        title: 'Diploma tasks',
        start: new Date(2018, 2, 15, 10, 30, 0),
        end: new Date(2018, 2, 15, 11, 50, 0),
    },

    {
        id: 39,
        title: 'Travel To Kiev',
        start: new Date(2018, 2, 17, 6, 55, 0),
        end: new Date(2018, 2, 17, 16, 40, 0),
    },


    {
        id: 3,
        title: 'Relax',
        start: new Date(2018, 2, 18, 6, 0, 0),
        end: new Date(2018, 2, 18, 8, 0, 0),
    },

    {
        id: 2,
        title: 'Coding',
        start: new Date(2018, 2, 19, 12, 30, 0),
        end: new Date(2018, 2, 19, 4, 0, 0),
    },

    {
        id: 33,
        title: 'Study in University',
        start: new Date(2018, 2, 19, 11, 30, 0),
        end: new Date(2018, 2, 19, 14, 25, 0),
    },

    {
        id: 34,
        title: 'Study in University',
        start: new Date(2018, 2, 20, 8, 30, 0),
        end: new Date(2018, 2, 20, 13, 10, 0),
    },

    {
        id: 35,
        title: 'Study in University',
        start: new Date(2018, 2, 21, 10, 20, 0),
        end: new Date(2018, 2, 21, 12, 45, 0),
    },

    {
        id: 36,
        title: 'Study in University',
        start: new Date(2018, 2, 22, 13, 30, 0),
        end: new Date(2018, 2, 22, 16, 40, 0),
    },

    {
        id: 38,
        title: 'Deadline of Hometask',
        start: new Date(2018, 2, 16, 8, 0, 0),
        end: new Date(2018, 2, 16, 24, 0, 0),
    },

    {
        id: 37,
        title: 'Diploma tasks',
        start: new Date(2018, 2, 21, 10, 30, 0),
        end: new Date(2018, 2, 21, 11, 50, 0),
    },

    {
        id: 39,
        title: 'Travel To Kiev',
        start: new Date(2018, 2, 23, 6, 55, 0),
        end: new Date(2018, 2, 23, 16, 40, 0),
    },


    {
        id: 3,
        title: 'Relax',
        start: new Date(2018, 2, 24, 6, 0, 0),
        end: new Date(2018, 2, 24, 8, 0, 0),
    },


    {
        id: 4,
        title: 'Some Event',
        start: new Date(2017, 3, 9, 0, 0, 0),
        end: new Date(2017, 3, 9, 0, 0, 0),
    },
    {
        id: 5,
        title: 'Conference',
        start: new Date(2017, 3, 11),
        end: new Date(2017, 3, 13),
        desc: 'Big conference for important people',
    },
    {
        id: 6,
        title: 'Meeting',
        start: new Date(2017, 3, 12, 10, 30, 0, 0),
        end: new Date(2017, 3, 12, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
        id: 7,
        title: 'Lunch',
        start: new Date(2017, 3, 12, 12, 0, 0, 0),
        end: new Date(2017, 3, 12, 13, 0, 0, 0),
        desc: 'Power lunch',
    },
    {
        id: 8,
        title: 'Meeting',
        start: new Date(2017, 3, 12, 14, 0, 0, 0),
        end: new Date(2017, 3, 12, 15, 0, 0, 0),
    },
    {
        id: 9,
        title: 'Happy Hour',
        start: new Date(2017, 3, 12, 17, 0, 0, 0),
        end: new Date(2017, 3, 12, 17, 30, 0, 0),
        desc: 'Most important meal of the day',
    },
    {
        id: 10,
        title: 'Dinner',
        start: new Date(2017, 3, 12, 20, 0, 0, 0),
        end: new Date(2017, 3, 12, 21, 0, 0, 0),
    },
    {
        id: 11,
        title: 'Birthday Party',
        start: new Date(2017, 3, 13, 7, 0, 0),
        end: new Date(2017, 3, 13, 10, 30, 0),
    },
    {
        id: 12,
        title: 'Late Night Event',
        start: new Date(2017, 3, 17, 19, 30, 0),
        end: new Date(2017, 3, 18, 2, 0, 0),
    },
    {
        id: 13,
        title: 'Multi-day Event',
        start: new Date(2017, 3, 20, 19, 30, 0),
        end: new Date(2017, 3, 22, 2, 0, 0),
    },
];


class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: events,
        };

        this.moveEvent = this.moveEvent.bind(this)
    }

    moveEvent({event, start, end}) {
        const {events} = this.state

        const idx = events.indexOf(event)
        const updatedEvent = {...event, start, end}

        const nextEvents = [...events]
        nextEvents.splice(idx, 1, updatedEvent)

        this.setState({
            events: nextEvents,
        })

        alert(`${event.title} was dropped onto ${event.start}`)
    }

    resizeEvent = (resizeType, {event, start, end}) => {
        const {events} = this.state

        const nextEvents = events.map(existingEvent => {
            return existingEvent.id === event.id
                ? {...existingEvent, start, end}
                : existingEvent
        })

        this.setState({
            events: nextEvents,
        })
    }

    render() {
        return (
            <div className="CalendarPage">
                <DragAndDropCalendar
                    selectable
                    events={this.state.events}
                    onEventDrop={this.moveEvent}
                    resizable
                    step={60}
                    timeslots={1.5}
                    onEventResize={this.resizeEvent}
                    defaultView="week"
                    views={['week', 'work_week', 'day', 'agenda']}
                    scrollToTime={new Date(2018, 2, 11, 8)}
                    defaultDate={new Date(2018, 2, 11)}
                    onSelectEvent={event => alert(event.title)}
                    onSelectSlot={slotInfo =>
                        alert(
                            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                            `\nend: ${slotInfo.end.toLocaleString()}` +
                            `\naction: ${slotInfo.action}`
                        )
                    }
                />
            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(Calendar)