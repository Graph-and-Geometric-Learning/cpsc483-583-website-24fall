<template>
    <v-container>
        <v-row>
            <v-col>
                <v-sheet class="pa-8" elevation="6">
                    <h1>Office Hours Calendar</h1>
                    <div style="margin-top: 2em;">
                        <vue-cal style="height: 1000px;" :events="events" :disable-views="['years', 'year']"
                            :time-cell-height="100" active-view="month" events-on-month-view=true />
                    </div>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

import { defineComponent } from "vue";

function getRecurringEventsStartEnd(start: string, end: string, day: number, name: string, loc: string, start_time: number, end_time: number) {
    var dates: { [key: string]: string }[] = []
    var start_date = new Date(start)
    var end_date = new Date(end)
    while (start_date < end_date) {
        start_date.setDate(start_date.getDate() + (((day + 7 - start_date.getDay()) % 7) || 7))
        var date = start_date.getFullYear() + '-' + String(start_date.getMonth() + 1).padStart(2, '0') + '-' + String(start_date.getDate()).padStart(2, '0')
        if (
            (date !== "2022-09-21") &&
            (date !== "2022-10-19") &&
            (date !== "2022-11-23")
        )
            dates.push({
                title: name,
                content: loc,
                start: date + ' ' + start_time.toString() + ':00',
                end: date + ' ' + end_time.toString() + ':00',
            })
    }
    return dates
}

function getRecurringEvents(day: number, name: string, loc: string, start_time: number, end_time: number) {
    return getRecurringEventsStartEnd("2023-08-30", "2023-12-08", day, name, loc, start_time, end_time)
}

function getRexEvents() {
    return getRecurringEvents(1, "Rex Ying", "", 15, 16)
}

function getJialinEvents() {
    return getRecurringEvents(5, "Jialin Chen", "Dunham 4th", 14, 15)
}

function getYuhangEvents() {
    return getRecurringEvents(4, "Yuhang Chen", "Marx Library", 10, 11)
}

function getAgastyaEvents() {
    return getRecurringEvents(3, "Agastya Rana", "TBD", 19, 20)
}

function getEvents() {
    return getRexEvents()
            .concat(getJialinEvents())
            .concat(getYuhangEvents())
            .concat(getAgastyaEvents())
}


export default defineComponent({
    components: { VueCal },
    data: () => ({
        events: getEvents()
    })
})
</script>