const commentForm = document.getElementById("commentForm");
const commentInput = document.getElementById("commentInput");
const submitBtn = document.getElementById("submitBtn");
const commentsContainer = document.getElementById("commentsContainer");
const commentsCount = document.getElementById("commentsCount");

let count = 1;


commentInput.addEventListener("input", () => {
    if (commentInput.value.trim() !== "") {
    submitBtn.removeAttribute("disabled");
    } else {
    submitBtn.setAttribute("disabled", "true");
    }
});


commentForm.addEventListener("submit", (e) => {
        e.preventDefault();

    const text = commentInput.value.trim();
    if (!text) return;


    const commentItem = document.createElement("div");
    commentItem.className = "comment-item";
    commentItem.innerHTML = `
    <div class="avatar">U</div>
    <div class="comment-content">
        <div class="comment-top">
        <span class="user-name">Guest User</span>
        <span class="comment-date">Just now</span>
        </div>
        <p class="comment-text">${escapeHTML(text)}</p>
    </div>
    `;


    commentsContainer.prepend(commentItem);


    count++;
    commentsCount.textContent = `Recent Comments (${count})`;


    commentInput.value = "";
    submitBtn.setAttribute("disabled", "true");
});

function escapeHTML(str) {
    return str.replace(
    /[&<>'"]/g,
    (tag) =>
        ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
        })[tag] || tag,
    );
}
