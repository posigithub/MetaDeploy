# Generated by Django 2.1.2 on 2018-10-15 20:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [("api", "0005_hoist_flow_name")]

    operations = [
        migrations.RenameField(
            model_name="preflightresult", old_name="step_results", new_name="results"
        )
    ]