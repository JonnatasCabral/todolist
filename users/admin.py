from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import ugettext_lazy as _

from .models import User
from .forms import UserCreationForm


class CustomUserAdmin(UserAdmin):
    list_display = ('id', 'name', 'username', 'email', 'created', 'modified')
    list_filter = ('is_active', 'is_staff', 'groups')
    search_fields = ('email',)
    ordering = ('email',)
    filter_horizontal = ('groups', 'user_permissions',)
    add_form = UserCreationForm
    model = User

    fieldsets = (
        (None, {'fields': ('name', 'username', 'email', 'password')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser',
                                       'groups', 'user_permissions')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('name', 'username', 'email', 'password1', 'password2')}),
    )

admin.site.register(User, CustomUserAdmin)
