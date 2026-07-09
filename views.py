from django.shortcuts import render, redirect
from .models import Expense
from .forms import ExpenseForm


def home(request):
    expenses = Expense.objects.all()
    return render(request, "dashboard.html", {"expenses": expenses})


def add_expense(request):
    if request.method == "POST":
        form = ExpenseForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("home")
    else:
        form = ExpenseForm()

    return render(request, "add_expense.html", {"form": form})
