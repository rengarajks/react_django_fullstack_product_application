from django.db import models

class product(models.Model):
    name=models.CharField(max_length=30,null=False,blank=False)
    desc=models.TextField()
    price=models.IntegerField(null=False,blank=False)
    category=models.CharField(max_length=20,null=False,blank=False)
    image=models.ImageField(upload_to='uploads/images',null=False,blank=False)

    def __str__(self):
        return self.name
