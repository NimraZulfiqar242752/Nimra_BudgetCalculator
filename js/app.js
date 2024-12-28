document.getElementById('calculate').addEventListener('click', function() {
    const income = parseFloat(document.getElementById('income').value);
    const utility = parseFloat(document.getElementById('utility').value);
    const groceries = parseFloat(document.getElementById('groceries').value);
    const rent = parseFloat(document.getElementById('rent').value);
    const petrol = parseFloat(document.getElementById('petrol').value);
    const other = parseFloat(document.getElementById('other').value);

    const spent = utility + groceries + rent + petrol + other;
    const savings = income - spent;

    document.getElementById('spent').textContent = spent.toFixed(2);
    document.getElementById('savings').textContent = savings.toFixed(2);
});

document.getElementById('send').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const query = document.getElementById('query').value;

    alert('Thank you, ' Dear Mr./Ms.+ name + '! Your query has been sent.Our budget calution team will get back to you');
});
