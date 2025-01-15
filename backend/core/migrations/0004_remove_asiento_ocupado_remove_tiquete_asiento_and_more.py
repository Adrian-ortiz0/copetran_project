# Generated by Django 5.1.4 on 2025-01-14 22:13

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_alter_ciudad_departamento'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='asiento',
            name='ocupado',
        ),
        migrations.RemoveField(
            model_name='tiquete',
            name='asiento',
        ),
        migrations.RemoveField(
            model_name='tiquete',
            name='empleado_venta',
        ),
        migrations.RemoveField(
            model_name='tiquete',
            name='viaje',
        ),
        migrations.AddField(
            model_name='asiento',
            name='vehiculo',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core.vehiculo'),
        ),
        migrations.AddField(
            model_name='tiquete',
            name='viaje_asiento',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core.viajeasiento'),
        ),
        migrations.AddField(
            model_name='viajeasiento',
            name='ocupado',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='viajeasiento',
            name='asiento',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core.asiento'),
        ),
        migrations.AlterField(
            model_name='viajeasiento',
            name='viaje',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core.viaje'),
        ),
    ]