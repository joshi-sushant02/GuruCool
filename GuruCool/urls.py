"""GuruCool URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
"""
# Django imports
from django.urls import re_path as url 
from django.urls import include
from django.contrib import admin

from django.urls import include, path

from django.contrib.auth import views as auth_views
from app import views
# admin.site.site_header = 'GuruCool admin'
# admin.site.site_title = 'Admin Site @gurucool'
# admin.site.site_url = 'http://coffeehouse.com/'
# admin.site.index_title = 'GuruCool administration'
# admin.empty_value_display = '**Empty**'
urlpatterns = [
    # Examples:
    
    path('login/', views.loginPage,name='login'),
    path('signup/',views.registerPage ,name='signup'),
    path('history/',views.history),
    path('history3/',views.h),
    path('',views.home,name='home'),
     
	path('logout/', views.logoutUser, name="logout"),
    # url('', views.home),
    # url('history/', views.history),
    # url('', views.home),
    # url('history2/', views.h),
    # # url('',auth_views.home),
    # # provide the most basic login/logout functionality
    # url(r'^login/$', auth_views.LoginView.as_view(template_name='auth/Login.html'),
    #     name='auth_login'),
    # url(r'^logout/$', auth_views.LogoutView.as_view(), name='core_logout'),
    
    # enable the admin interface
    path('admin/', admin.site.urls),
]
