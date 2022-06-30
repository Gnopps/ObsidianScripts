---
tags: case, 
logo: file:///C:/< YOUR PATH HERE! >/Logos/<% tp.file.title.replaceAll(" ", "%20") %>.png
---
#### General
- AE:: 
- CRM
- Products:: 

#### Info
- ERPs:: 

#### Todos
```tasks
not done
path includes <% tp.file.title %>
hide task count
hide start date
```

#### Activities
- [[<% tp.date.now("YYYY-MM-DD") %>]]
	- [ ] Add to [CRM](https://mycorporatecrm.com/list) ⏳ <% tp.date.now("YYYY-MM-DD", 14) %>
	- [ ] Add [logo](https://www.google.com/search?q=logo+fileformat:png&tbm=isch) ⏳ <% tp.date.now("YYYY-MM-DD", 14) %>

#### Meetings
```dataviewjs
let meetings = dv.pages(`"${dv.current().file.folder}" and #meeting`)
meetings = meetings.sort(k => k.date, 'desc')
for (let meeting of meetings){
dv.el("p", "![[" + meeting.file.name + "]]");
}
```