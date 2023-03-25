from django.shortcuts import render

# Create your views here.

tasks =["Eat","Code","Sleep","Repeat"]

def index(request):
    return render(request,"tasks/index.html",{
        "tasks":tasks
    })

def add(request):
    return render(request,"tasks/add.html")
