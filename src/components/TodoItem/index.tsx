interface todoItemProps {
    id: string,
    text: string,
    status: 'active' | 'completed'
}

export function TodoItem() {
    return(
        <div className="todo-item">
            <div className="item-status">
                
            </div>
            <p></p>
        </div>
    )
}

/*
<div class="todo-item">
        <div class="check">
            <div data-id="${item.id}" class="check-mark ${item.status == "complete" ? "checked" : ""}">
                <img src="./assets/icon-check.svg" alt="">
            </div>
        </div>
    <div class="todo-text ${item.status == "complete" ? "checked" : ""}">${item.text}</div>
</div>
 */