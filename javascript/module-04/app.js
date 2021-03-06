'use strict';
const Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const notepad = {
  notes: [],
  getNotes() {
    return this.notes;
  },
  findNoteById(id) {
    for (const obj of this.notes) {
      if (obj.id === id) {
        return obj;
      }
    }
  },
  saveNote(note) {
    this.notes.push(note);
    return note;
  },
  deleteNote(id) {
    this.notes.splice(this.notes.indexOf(this.findNoteById(id)), 1);
  },
  updateNoteContent(id, updatedContent) {
    Object.assign(this.findNoteById(id), updatedContent);
  },
  updateNotePriority(id, priority) {
    const findObject = this.findNoteById(id);
    findObject.priority = priority;
    return findObject;
  },
  filterNotesByQuery(query) {
    let notesIncludesWords = [];
    for (const obj of this.notes) {
      if (
        obj.title.toLowerCase().includes(query) ||
        obj.body.toLowerCase().includes(query)
      ) {
        notesIncludesWords.push(obj);
      }
    }
    return notesIncludesWords;
  },
  filterNotesByPriority(priority) {
    let notesIncludesPriority = [];
    for (const obj of this.notes) {
      if (obj.priority === priority) {
        notesIncludesPriority.push(obj);
      }
    }
    return notesIncludesPriority;
  },
};

notepad.saveNote({
  id: 'id-1',
  title: 'JavaScript essentials',
  body:
    'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
  priority: Priority.HIGH,
});

notepad.saveNote({
  id: 'id-2',
  title: 'Refresh HTML and CSS',
  body:
    'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
  priority: Priority.NORMAL,
});

notepad.saveNote({
  id: 'id-3',
  title: 'Get comfy with Frontend frameworks',
  body:
    'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: Priority.NORMAL,
});

notepad.saveNote({
  id: 'id-4',
  title: 'Winter clothes',
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Priority.LOW,
});

console.log('Все текущие заметки: ', notepad.getNotes());

notepad.updateNotePriority('id-4', Priority.NORMAL);

console.log(
  'Заметки после обновления приоритета для id-4: ',
  notepad.getNotes(),
);

notepad.updateNotePriority('id-3', Priority.LOW);

console.log(
  'Заметки после обновления приоритета для id-3: ',
  notepad.getNotes(),
);

console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notepad.filterNotesByQuery('html'),
);

console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notepad.filterNotesByQuery('javascript'),
);

console.log(
  'Отфильтровали заметки по нормальному приоритету: ',
  notepad.filterNotesByPriority(Priority.NORMAL),
);

notepad.updateNoteContent('id-3', {
  title: 'Get comfy with React.js or Vue.js',
});

console.log(
  'Заметки после обновления контента заметки с id-3: ',
  notepad.getNotes(),
);

notepad.deleteNote('id-2');
console.log('Заметки после удаления с id -2: ', notepad.getNotes());
