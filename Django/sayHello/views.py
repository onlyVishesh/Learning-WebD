from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request): # Giving our own string
    return HttpResponse("Hello, World!")

def vishesh(request):   # Giving our own string
    return HttpResponse("Hello, Vishesh!")

def helloName1(request,name):   # Giving our own string but taking name from user
    return HttpResponse(f"Hello, {name.capitalize()}!")

def hello(request): # Displaying our html file
    return render(request,"sayHello/hello.html")

def helloName2(request,name):   # Displaying our html file but taking name from user
    return render(request,"sayHello/greet.html",{"name":name.capitalize()})
