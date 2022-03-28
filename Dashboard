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
- ## 🍅 Pomodoros
	```tracker
	searchType: text
	searchTarget: 🍅
	folder: /
	startDate: -6d
	endDate: 0d
	accum: true
	penalty: 0
	fitPanelWidth: true
	line:
		showLine: true
		yAxisLabel: Nbr
		xAxisLabel: Date
		yMin: 0
		fillGap: true
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
	limit 5
	```
- ## ⬜ Other tasks
	```tasks
	not done
	scheduled before in 90 days
	scheduled after in 6 days
	hide edit button
	hide start date
	limit 5
```
````

````ad-dashb
title: Recent cases
color: 0, 169, 206
icon: file-contract
```dataview
table without id ("![](" + logo + ")") as "", ("[[" + file.name + "]]") as Name, Products, AE, file.mday AS "Last edit"
WHERE file.mday >= date(today) - dur(14 day) AND file.folder != "Templates" AND AE != null
SORT file.mtime DESCENDING
```
````
