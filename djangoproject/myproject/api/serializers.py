from myapp.models import Message
from rest_framework import serializers

class MessageSerializers(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('__all__')