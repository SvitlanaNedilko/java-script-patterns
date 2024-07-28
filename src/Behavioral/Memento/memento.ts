class EditorMemento {
  constructor(private content: string) {}

  getContent(): string {
    return this.content;
  }
}

// Originator
class TextEditor {
  private content: string = '';

  type(words: string): void {
    this.content += words;
  }

  save(): EditorMemento {
    return new EditorMemento(this.content);
  }

  restore(memento: EditorMemento): void {
    this.content = memento.getContent();
  }

  getContent(): string {
    return this.content;
  }
}

// Caretaker
class EditorHistory {
  private history: EditorMemento[] = [];

  push(memento: EditorMemento): void {
    this.history.push(memento);
  }

  pop(): EditorMemento | undefined {
    return this.history.pop();
  }
}

(() => {
  const editor = new TextEditor();
  const editorHistory = new EditorHistory();

  editor.type('Hello, ');
  editorHistory.push(editor.save());

  editor.type('World!');
  editorHistory.push(editor.save());

  console.log(editor.getContent()); // Output: Hello, World!

  editor.restore(editorHistory.pop()!);
  console.log(editor.getContent()); // Output: Hello,

  editor.restore(editorHistory.pop()!);
  console.log(editor.getContent()); // Output:
})();
