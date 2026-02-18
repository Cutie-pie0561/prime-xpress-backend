from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Vehicle
from .serializers import VehicleSerializer


class VehicleViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Vehicle.objects.filter(is_active=True)
    serializer_class = VehicleSerializer

    @action(detail=False)
    def choices(self, request):
        return Response(
            [{"id": v.id, "name": v.name} for v in self.get_queryset()]
        )
