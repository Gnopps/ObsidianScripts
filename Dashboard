---
cssclass: maxWidth, dashboard
---

````ad-dashb
title: Today
color: 245, 229, 12
icon: calendar-today
- ## ☝️ Must do today
	```tasks
	not done
	due before in 1 day
	hide start date
	hide due date
	hide scheduled date
	hide edit button
	```
- ## 🤝🏼 Meetings
	```dataview
	list WITHOUT ID project + " - " + "[["+file.name+"]]"
	FROM #meeting and -#held
	WHERE contains(date(Date), date(today))
	```
- ## 📮 Inbox
	```tasks
	not done
	no due date
	description does not include #
	no scheduled date
	path does not include Templates
	```
````

````ad-dashb
title: Work
icon: briefcase
- ## 💪 Try to do today
	```tasks
	not done
	scheduled before in 1 day
	hide start date
	hide due date
	hide scheduled date
	hide edit button
	limit 5
	```
- ## 📅 Upcoming
	```tasks
	not done
	due before in 3 days
	due after in 0 days
	hide start date
	hide scheduled date
	hide edit button
	limit 5
	```
- ## 🍅 / ☑️ Completed
	```tracker
	searchType: text, dvField, text
	searchTarget: 🍅, ignore, ☑️
	datasetName: pomodoros, reference, tasks
	folder: /
	startDate: -6d
	endDate: 0d
	accum: true, false, true
	penalty: 0, 10, 0
	fitPanelWidth: true
	line:
		showLine: true
		yAxisLabel: Nbr
		xAxisLabel: Date
		showPoint: false, false, false
		yMin: 0
		fillGap: true
		lineColor: "red, #A9D4C0, blue"
	```
````

````ad-dashb
title: All todos
icon: list
collapse: true
color: 3, 135, 36
- ## 🆙 With due-date
	```tasks
	not done
	due after 1999-01-01
	hide edit button
	hide start date
	```
- ## ⬜ Other tasks
	```tasks
	not done
	scheduled before in 90 days
	scheduled after in 1 days
	hide edit button
	hide start date
	limit 5
```
````

````ad-dashb
title: Recent cases
color: 0, 169, 206
icon: file-contract
```dataviewjs
function checkDate(item) {
	if (moment(new Date(item.lastDate)).isAfter(moment().subtract(2, 'weeks'))){
		return true
	}
	return false
}

let customers = dv.pages('"Customers" and #case')
for (let customer of customers){
	customer.lastDate = customer.file.mday
	for (let inlink of customer.file.inlinks){
		if(dv.page(inlink).file.tags.indexOf("#meeting") > -1 && dv.page(inlink).file.folder == customer.file.folder){
			if (customer.lastDate < dv.page(inlink).file.mday){
				customer.lastDate = dv.page(inlink).file.mday
			}
		}
	}
}
dv.table(["Logo","Name", "Products","AE", "Last activity"], customers
.filter(t => checkDate(t))
.sort(k => k.lastDate, "desc")
.map(b => ["![](" + b.logo + ")", "[["+b.file.name+"]]", b.products,b.ae, b.lastDate]))
```
````